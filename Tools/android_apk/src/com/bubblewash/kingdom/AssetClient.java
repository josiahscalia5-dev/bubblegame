package com.bubblewash.kingdom;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

/**
 * Serves the game packed in the APK's assets/www/ at https://appassets.androidplatform.net/ (never fetched from the
 * network), so the game's ES module script and its fetch() of the 3D models work as they do from a web server.
 * Other links open outside the app. (A named class, not an anonymous one: build-tools 34's d8 fails on the anonymous
 * class this JDK writes.)
 */
public class AssetClient extends WebViewClient {
    static final String HOST = "appassets.androidplatform.net";
    private final Activity activity;

    AssetClient(Activity activity) { this.activity = activity; }

    @Override
    public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest req) {
        Uri u = req.getUrl();
        if (!"https".equals(u.getScheme()) || !HOST.equals(u.getHost())) return null;   // e.g. the web font
        String path = u.getPath();
        if (path == null || path.isEmpty() || path.equals("/")) path = "/start.html";
        if (path.contains("..")) return notFound();
        try {
            InputStream in = activity.getAssets().open("www" + path);
            String mime = mimeOf(path);
            WebResourceResponse res = new WebResourceResponse(mime, mime.startsWith("text/") || mime.endsWith("json") ? "utf-8" : null, in);
            Map<String, String> h = new HashMap<String, String>();
            h.put("Access-Control-Allow-Origin", "*");
            h.put("Cache-Control", "no-cache");
            res.setResponseHeaders(h);
            return res;
        } catch (Exception e) {
            return notFound();
        }
    }

    @Override
    public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest req) {
        Uri u = req.getUrl();
        if (HOST.equals(u.getHost())) return false;   // the game's own pages stay in the app
        try { activity.startActivity(new Intent(Intent.ACTION_VIEW, u)); } catch (Exception ignored) { }
        return true;
    }

    private static WebResourceResponse notFound() {
        return new WebResourceResponse("text/plain", "utf-8", 404, "Not Found", new HashMap<String, String>(), new ByteArrayInputStream(new byte[0]));
    }

    static String mimeOf(String path) {
        String p = path.toLowerCase();
        if (p.endsWith(".html")) return "text/html";
        if (p.endsWith(".js") || p.endsWith(".mjs")) return "text/javascript";
        if (p.endsWith(".json")) return "application/json";
        if (p.endsWith(".css")) return "text/css";
        if (p.endsWith(".glb")) return "model/gltf-binary";
        if (p.endsWith(".png")) return "image/png";
        if (p.endsWith(".jpg") || p.endsWith(".jpeg")) return "image/jpeg";
        if (p.endsWith(".webp")) return "image/webp";
        if (p.endsWith(".svg")) return "image/svg+xml";
        if (p.endsWith(".mp3")) return "audio/mpeg";
        if (p.endsWith(".ogg")) return "audio/ogg";
        if (p.endsWith(".wav")) return "audio/wav";
        if (p.endsWith(".woff2")) return "font/woff2";
        return "application/octet-stream";
    }
}
