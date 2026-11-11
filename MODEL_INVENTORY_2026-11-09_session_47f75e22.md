# Model inventory (9 November 2026 ~16:15 UTC, session 47f75e22; generated from the files by a script, not from memory)

142 GLB files on the integration branch (node_modules and generated artifact-models excluded) + 5 lane-only GLB files (committed on a lane branch). "referenced in game code" = the file name appears in WebDemo/src (some switch loads it; the plain launch uses a subset, CLAUDE.md). Validation: `node Tools/check_models.cjs <dir>` (Khronos glTF Validator). No Tripo credits were spent this session.

## The user's eight Tripo models of 9 November (session 47f75e22): ALL EIGHT RECEIVED and saved (exact bytes; SHA-256 = the user's manifest)
Folder `Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/` (README, manifest, `verify_all_glbs.py`); 24 mobile LODs in `mobile/` (`optimize_mobile.sh`). Evaluation and KEEP / MODIFY / REJECT verdicts: `Previews/WebDemo/six_scenes/12_eight_models_47f75e22/README.md`. Nothing is missing from this delivery. The previous inventory's "MISSING: never uploaded" items (Machinery_tiny, 911_tiny, 912_tiny, yo_jj_optimized, "913 914") are RESOLVED by it; a distinct "912_small" was not part of it and is still not in the repository.

## Lane-only models (committed on a specialist branch, not on the integration branch)
| Lane | Path | Bytes | SHA-256 |
|---|---|---|---|
| arch56 | WebDemo/models/s56tm/913_914_lod1.glb | 439,056 | `0088b952e0aaeb06cc61b76ce2fabb1c3e8766a0e17b9fe21cff13284d42d1a6` |
| arch56 | WebDemo/models/s56tm/913_914_lod2.glb | 133,220 | `3a1c41fdc9ceae2c3ce3565f28aa273a0a065af269528f23b64d9ba5696b6164` |
| arch56 | WebDemo/models/s56tm/Machinery_tiny_far.glb | 143,244 | `a6a551782aa8d8ccb099f98d25c1a9bb5b0464632370f3c76a8bb6ce39d1c825` |
| arch56 | WebDemo/models/s56tm/Machinery_tiny_lod1.glb | 513,536 | `689079062038843c7b23f438c9e2e5671bcdcf3ac3a331947bdcc2c036ead245` |
| arch56 | WebDemo/models/s56tm/blue_jt_tiny_lod1.glb | 419,808 | `e22efc410dc7d8f480e15d6d5d55fb093f3c2e331c284274de0ce1bd1aa08d91` |

## All models on the integration branch
| Path | Bytes | SHA-256 | Code |
|---|---|---|---|
| Assets/BubbleWash/Models/CastlePortal/BubbleWashCastle.glb | 17,128,408 | `a5d407ad87eeee77f6678dbd2a137f6715b8eb18c4fd27c633927bb5e7b55d25` | not referenced |
| Assets/BubbleWash/Models/Gem/BubbleWash_Pink_Gemstone_Claudia_Small.glb | 1,417,820 | `cbbbeb471737a9e671b5d1e71a4a0bc77ecb103a637eafd7039ba93ccc11d89b` | not referenced |
| Assets/BubbleWash/Models/SpinningBrush/BubbleWash_WashingRoller_Claudia_Textured.glb | 9,786,196 | `c140b7652161bd9c6df33142d79b63a4e7acd6d585bcfa185300d97d64a5499e` | not referenced |
| Assets/BubbleWash/Models/WasherTunnel/BubbleWashTunnel_Mobile_2K_Lite.glb | 17,329,924 | `5317b09d3a006c387b8060d94cb2aa3b5cced0404c21bf17d45e8346aa5304e8` | not referenced |
| Design/MeshyDeliveries/CompactRollers/BWK_Roller_1_Claude_Compact.glb | 4,877,728 | `c7f15a3d22027e0c3d5a878fccf6fc968df8d0c4889bb5e728595f9644314c72` | not referenced |
| Design/MeshyDeliveries/CompactRollers/BWK_Roller_2_Claude_Compact.glb | 3,321,516 | `b21fe8cd70d28f60840dd44e78e1d1fb081b2f46032513bcdbe06e5db88fefa0` | not referenced |
| Design/MeshyDeliveries/DuckHelper/BubbleWash_Duck_Helper_Claudia_Balanced_ColorSafe.glb | 1,754,012 | `de4036e48ba1dd1dae3d0bae554d2a0b582e1b60c0e495b922d63ae3b7828121` | not referenced |
| Design/MeshyDeliveries/DuckHelper/BubbleWash_Duck_Helper_Claudia_Small_ColorSafe.glb | 781,384 | `0278e300fad4ea7a5d3b156041f747d87f9f72d0ae446a7ea687a1c5cf070697` | not referenced |
| Design/MeshyDeliveries/EntranceDecor/Blue_Gold_Gear_Wheel_Claudia_Balanced.glb | 6,238,832 | `d9637d99dd75375eaa8fcde1d0495d636e3fe89c11c1d4e05aba235daa31fabb` | not referenced |
| Design/MeshyDeliveries/EntranceDecor/Blue_Gold_Gear_Wheel_Claudia_Small.glb | 1,985,556 | `0eca06f7a85ca668b631cd70586657bf65c6e5e97f44584f2964ca753fa0881e` | not referenced |
| Design/MeshyDeliveries/EntranceDecor/Crown_Curved_Trim_Claudia_Balanced.glb | 5,460,824 | `cddc7ac56e332d2ec74966c0705f658b25d5631929e1d41a865e76e36dd64a60` | not referenced |
| Design/MeshyDeliveries/EntranceDecor/Crown_Curved_Trim_Claudia_Small.glb | 1,547,880 | `7b0f00352a9b008f52ba1dcd901850857267fb5f89d9cbd67509073e187415e8` | not referenced |
| Design/MeshyDeliveries/EntranceDecor/Curved_Golden_Pipe_Claudia_Balanced.glb | 5,875,804 | `8c99dadba4aaebf845e8f6826c8b21f249ef2ca6438befb5a1b6caba1ddd4497` | not referenced |
| Design/MeshyDeliveries/EntranceDecor/Curved_Golden_Pipe_Claudia_Small.glb | 1,863,868 | `8316bf34207e39faca3a0277959845146e163cc53d80637627436faffda0ab6d` | not referenced |
| Design/MeshyDeliveries/EntranceDecor/Glowing_Water_Tower_Claudia_Balanced.glb | 6,740,448 | `b0a1f39b1356106798af5ce1f0c404621db64bd052d922b5f1ea6411575a3bc6` | not referenced |
| Design/MeshyDeliveries/EntranceDecor/Glowing_Water_Tower_Claudia_Small.glb | 2,012,300 | `870b564a5c1492ebe79a3c448657c611956fe6533af45ef1ede4d823c3687389` | not referenced |
| Design/MeshyDeliveries/LostSock/BubbleWash_Lost_Sock_Claudia_Balanced.glb | 9,229,056 | `253b74ac3aae2574cba6eaa2b416a4f09d34fea6129c2c3fc6a7394afbeb01cf` | not referenced |
| Design/MeshyDeliveries/LostSock/BubbleWash_Lost_Sock_Claudia_Small.glb | 3,570,668 | `59430407ad5c0083159a06d2acc9fcc1248a55b9ba3e6bb2cbffda932bb02b9a` | not referenced |
| Design/MeshyDeliveries/PinkGemstone/BubbleWash_Pink_Gemstone_Claudia_Small.glb | 1,417,820 | `cbbbeb471737a9e671b5d1e71a4a0bc77ecb103a637eafd7039ba93ccc11d89b` | not referenced |
| Design/MeshyDeliveries/PinkGemstone/BubbleWash_Pink_Gemstone_Claudia_Tiny.glb | 1,288,080 | `571a9a2c3a1fdec192da0c6dd7df6d6a969da1c65c252050312ab9785716a13b` | not referenced |
| Design/MeshyDeliveries/PinkMascot/BubbleWash_Pink_Mascot_Claudia_10MB_ColorSafe.glb | 10,331,384 | `2e6adde650ecf6dec46c6bd892c7ba7d46c0ce1f3357bb1c1816cfdfe722fb4a` | not referenced |
| Design/MeshyDeliveries/PinkMascot/BubbleWash_Pink_Mascot_Claudia_4MB_ColorSafe.glb | 3,975,764 | `1518242348ceb0b9d4551a59fb7176f6d7e0f8496e54bc71b7c693d48f601cc6` | not referenced |
| Design/MeshyDeliveries/Screen3Models/BWK_Enchanted_Entrance_New_Claude_Small.glb | 2,484,488 | `14acce351041078140fecb8da51bfe24e1987707c8e3d8e3cbe3129f66e515c9` | not referenced |
| Design/MeshyDeliveries/Screen3Models/BWK_Number1_Blue_Brush_Claude_ExtraSmall.glb | 2,969,856 | `d91c29a8e3e78f72cb9ff33d4512d2a0c4a27283a8be801711b4a4a4c16ad083` | not referenced |
| Design/MeshyDeliveries/Screen3Models/BWK_Number4_Castle_Final_Claude_Small.glb | 2,628,592 | `c67bb7bc9c7938f4ff5d09e4dbe0ac77b67f7f63861e0846607fdabd075889ed` | not referenced |
| Design/MeshyDeliveries/Screen3Models/BWK_Number4_Castle_Newest_Claude_Small.glb | 2,583,040 | `2b7db642523f3c4149739b7220a075d556c6abf2604cf27e0e0bee50d9e697c4` | not referenced |
| Design/MeshyDeliveries/Screen3Models/BWK_Side_Machinery_New_Claude_Small.glb | 1,721,220 | `65bb1465e2136f6c894cf01e4c5ea32e303716852b73a8f5025f291c63f17f65` | not referenced |
| Design/MeshyDeliveries/SideMachinery/BubbleWash_Side_Machinery_Claudia_Balanced.glb | 5,139,932 | `bc688a62020cd842348432af9ca6d471c4084d11cc13b27826d22b6327039dd0` | not referenced |
| Design/MeshyDeliveries/SideMachinery/BubbleWash_Side_Machinery_Claudia_Medium.glb | 8,449,828 | `5d20b4113617a89fbc5cf1d8222b69b0bbe25f6fb6b964ca59b50c21758d73da` | not referenced |
| Design/MeshyDeliveries/SideMachinery/BubbleWash_Side_Machinery_Claudia_Small.glb | 2,007,312 | `a5a6935d0df2143be2db9b83ab4466b94be73c9029198637967de2e93196b94c` | not referenced |
| Design/MeshyDeliveries/TunnelInterior/BubbleWash_Washer_Tunnel_Interior_Claudia_Balanced.glb | 4,248,132 | `98d37b2dc8e7ecb21e15272aaddc628a341f38ffaeb8f829b60a31db7f09358e` | not referenced |
| Design/MeshyDeliveries/TunnelInterior/BubbleWash_Washer_Tunnel_Interior_Claudia_Recommended.glb | 6,862,708 | `d2055d4b334f5040088fbbd759048d17b61c15e55f9116695ef5d2814cc75e4f` | not referenced |
| Design/MeshyDeliveries/TunnelInterior/BubbleWash_Washer_Tunnel_Interior_Claudia_Small.glb | 1,385,136 | `97e15d670ffc4abcf0ad5acbd9a39ff02b183375d5bbf833f9ab3a7e0b9dcc0b` | not referenced |
| Design/MeshyDeliveries/WashingRoller/BubbleWash_WashingRoller_Claudia_Balanced.glb | 6,860,580 | `f689828cee3506234bf9ccb614672eb00820f75a8de5a26a5ae3346ee219c724` | not referenced |
| Design/MeshyDeliveries/WashingRoller/BubbleWash_WashingRoller_Claudia_Textured.glb | 9,786,196 | `c140b7652161bd9c6df33142d79b63a4e7acd6d585bcfa185300d97d64a5499e` | not referenced |
| Design/MeshyDeliveries/WashingRoller/BubbleWash_WashingRoller_Claudia_UltraLite.glb | 2,179,272 | `3295e1d2e2686068e8457d31a958b980189edcca964925c0570376bcba026ecd` | not referenced |
| Design/ReferencePacks/2026-11-05_Screen4_Visual_Evidence_and_Assets/03_Optional_Bubble_Assets/Starter_Transparent_Bubble_Cluster.glb | 65,208 | `e8dc1a2942a7abfc5bb226c14f605948d09072ce61628f14bb2677962f32039a` | not referenced |
| Design/TripoDeliveries/2026-11-08_Six_Assets_from_user/cartoon girl 3d model.glb | 3,154,864 | `4b0b8da7bc7f3819a7827d86c3d66ac1726aa1dbe2b32615da3a928c9a825152` | referenced in game code |
| Design/TripoDeliveries/2026-11-08_Six_Assets_from_user/pink fluffy creature 3d model.glb | 4,812,284 | `cd00a584fdb8fea68317dcbbe431a77975167c196f8584531cf24f831a7df0cf` | not referenced |
| Design/TripoDeliveries/2026-11-08_Six_Assets_from_user/purple basket 3d model.glb | 2,240,484 | `23356a121ff6d868032c72950bebf19fe9723f70e1ae45c56a6008291b92863a` | referenced in game code |
| Design/TripoDeliveries/2026-11-08_Six_Assets_from_user/sock character 3d model.glb | 3,922,944 | `56c24346dd4da7118a3cb7b8a9e8edd3192d0b80ba2187cfeec404603f86b911` | not referenced |
| Design/TripoDeliveries/2026-11-08_Six_Assets_from_user/soft plush towels 3d model.glb | 4,885,052 | `87e226c2c1edfb20496bfaa1184902920fed3e39e89d8a8501ccc06bd543cf72` | referenced in game code |
| Design/TripoDeliveries/2026-11-08_Six_Assets_from_user/washing machine 3d model.glb | 2,390,616 | `0a67f89d46e718aae7e8894be9b9d4fac265a9f44cea1219f14b8ca4d5954bb5` | not referenced |
| Design/TripoDeliveries/2026-11-08_session_57091b57_Level1_assets/castle/tripo_castle_raw.glb | 8,894,524 | `430eeb91dc5f5450a0726ceb5ae2cd304bbe626d07b847d4fffbb3750b1af5d6` | not referenced |
| Design/TripoDeliveries/2026-11-08_session_57091b57_Level1_assets/enemy/tripo_enemy_raw.glb | 6,379,812 | `f03903fbd0c59db8d7f2fb655d406e819d0d033f239d58b2632c7e0a2b8b7039` | not referenced |
| Design/TripoDeliveries/2026-11-08_session_57091b57_Screen09_architecture/s09_housing/s09_housing_raw.glb | 5,008,112 | `8db3472475fb7964d9e17536646672cfec2af4cf81b6169318de304022e996d8` | not referenced |
| Design/TripoDeliveries/2026-11-08_session_57091b57_Screen09_architecture/s09_machinery/s09_machinery_raw.glb | 6,569,648 | `bdc9c7440b1f1ea1a674c8f7c642d2619658da6fbd7707e2549df11a04996a8d` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/913 914.glb | 18,866,372 | `661687e63236c7368b94cb86ccda4222618b90a7f071eacdff1c372aef450643` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/BubbleWash_Tripo_911_tiny.glb | 10,150,020 | `4345fd777bccb7fcc16f70acd1f059e3957d128ebd89f42edfede485dd51e29c` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/BubbleWash_Tripo_912_tiny.glb | 10,791,824 | `16b4878d64f506324123842b2059ff2a7aa63138be49064bdff536a169898f88` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/BubbleWash_Tripo_Machinery_tiny.glb | 10,358,984 | `999ebdd3ad1d4d39230f92c70f64714c0fbb81b98078520086931219bd7be019` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/BubbleWash_Tripo_blue_jt_tiny.glb | 10,254,232 | `086b0652cb8786060c691b8b627afd381a8088a5c19c022f7cda8a67ee63e95b` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/BubbleWash_Tripo_dave_tiny.glb | 10,084,252 | `5e599f37e4270e07b157f2c9c9d6ecc383651a29cdfa8bc75e3598a093533567` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/BubbleWash_Tripo_gold_jj_tiny.glb | 9,386,348 | `94593bdb007cd517fd7115a34fb50dc8338cd3bb41b7d6ffc0b58b1a15e4fddc` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/BubbleWash_Tripo_yo_jj_optimized.glb | 43,780,888 | `61869bb5b5556a54f5cf40a6f32edccd333b967d769dfb8d7b00475675946a7e` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/mobile/911_tiny_lod0.glb | 400,520 | `0c970d8115404f780f23a7ad0b8c9a8b349daecd94bc915175f54e53c06a38a8` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/mobile/911_tiny_lod1.glb | 271,264 | `8f45d7420f8e92989ef990ab55a5bbb66dfcf236ec5d218a3711436cc47d867e` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/mobile/911_tiny_lod2.glb | 69,988 | `9098493e87af5fe6e376d8c057fc71ee329a7cebd6fc20bbb35e07453f9fb957` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/mobile/912_tiny_lod0.glb | 1,227,504 | `287fbababf4b519cf0137849f6da4ecca03356f9890eb0423396ea9373fdc71a` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/mobile/912_tiny_lod1.glb | 435,736 | `a2c8fcf052e78da1441d0c088821073ef4f8f4ed51156540f65e119d26324ca8` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/mobile/912_tiny_lod2.glb | 124,444 | `6e5ae0a4fb02a9023b121568eedc403f1b92c10d6dafbbe867cc7c8b5c4c0d8b` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/mobile/913_914_lod0.glb | 1,235,760 | `106eec2435f500bc0567cf8ddc260d8b6bbd69ebd88aff29bf019accbf335dcf` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/mobile/913_914_lod1.glb | 439,056 | `0088b952e0aaeb06cc61b76ce2fabb1c3e8766a0e17b9fe21cff13284d42d1a6` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/mobile/913_914_lod2.glb | 133,220 | `3a1c41fdc9ceae2c3ce3565f28aa273a0a065af269528f23b64d9ba5696b6164` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/mobile/Machinery_tiny_lod0.glb | 585,236 | `0ce1ad25e36ae12fe10786425ca203ab334570904ba111a81da2dbb1da1ad5fa` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/mobile/Machinery_tiny_lod1.glb | 464,700 | `2667f9652467bc78cc9c2c90b15dbb730623e65f58eb749a75876965b44ccf97` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/mobile/Machinery_tiny_lod2.glb | 131,412 | `8d38a3b66b434875510eb54948ca45b635790f9f9a61b101dd9d9fa212cfb640` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/mobile/blue_jt_tiny_lod0.glb | 558,792 | `3127b9653be74ffbe1b239f34e703ef36357cd396678c2b57cc2ba0346c679d6` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/mobile/blue_jt_tiny_lod1.glb | 412,304 | `a3c1eec217e4c27bd746a16cc25faf9bb23ff6216926e1139ea0a37ca9872afd` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/mobile/blue_jt_tiny_lod2.glb | 128,812 | `67c26239fa974796751e8e49b439cf06986d5bbefa983c3267e360ef62c5e005` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/mobile/dave_tiny_lod0.glb | 585,888 | `90d94c2ba5219378ace1fc1f55fa6fd646c1217c911857c75336bf9ff7615101` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/mobile/dave_tiny_lod1.glb | 438,520 | `7fc107826007cb2a9fdcca6ffdd1079f8f3eab367e227acea68a4a8466c2698e` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/mobile/dave_tiny_lod2.glb | 134,920 | `eaad6d01c9d403acb82d12f3b4a6a2feeec4045a9f7ad505b0d84c44df31dec9` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/mobile/gold_jj_tiny_lod0.glb | 444,292 | `c26f761aa17b404cd70a7342199370c7070f8a10b74117193f153e1bf821a3ae` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/mobile/gold_jj_tiny_lod1.glb | 303,828 | `46c66d2f4995abb83ef1e682a07e96d1a77b17180395bcda8f224e6406cbe48c` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/mobile/gold_jj_tiny_lod2.glb | 100,860 | `269228e22babb642186a212a3e415f2e307d8eff435c1dd4a68732e95b52547a` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/mobile/yo_jj_optimized_lod0.glb | 615,680 | `76354368a4f40e03c6780b07eaffc684421a227adffea607d41b86cfc62b62f6` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/mobile/yo_jj_optimized_lod1.glb | 347,468 | `ff6274d79cc6297c69e1033e0b59ea0e7d39b7c2e0b6f3e2fa0a6a9328ef3e95` | not referenced |
| Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/mobile/yo_jj_optimized_lod2.glb | 71,020 | `62b00c7dddb230b0d34218e6416ad9d1194c379fe788ec6f1d9ee9e798b072eb` | not referenced |
| Design/TripoDeliveries/2026-11-09_New_Models_from_user/originals/01_Pink_Gold_Machinery_COMPACT.glb | 10,138,588 | `252112acdfecb2eaf864d8b00eef25d9da418497cccb95e6ec00faf0918813e7` | not referenced |
| Design/TripoDeliveries/2026-11-09_New_Models_from_user/originals/01_Purple_Enemy_Candidate_COMPACT.glb | 8,970,932 | `ec1d5230faf141c7117cc437ac8ee6ce67b131c38591bda40fc8e93aec2e3d13` | not referenced |
| Design/TripoDeliveries/2026-11-09_New_Models_from_user/originals/02_Girl_Character_COMPACT.glb | 10,703,956 | `0cf256e0edf1606fd57287c6936ef6ee7892391fdd13d0c9c14b5d787cde2be4` | not referenced |
| Design/TripoDeliveries/2026-11-09_New_Models_from_user/originals/02_Gold_Pipe_Candidate_COMPACT.glb | 9,592,008 | `586fabc40fc32f6f078b89c7926f432b08e37e62323be7cb3360741e51c9dcf3` | not referenced |
| Design/TripoDeliveries/2026-11-09_New_Models_from_user/originals/03_Blue_Surface_Candidate_COMPACT.glb | 10,548,560 | `a9eca57bf8e42c332685413b1c6cab7fde24900cc9ce02045bc400d8ef42832e` | not referenced |
| Design/TripoDeliveries/2026-11-09_New_Models_from_user/originals/03_Purple_Laundry_Basket_COMPACT.glb | 9,892,728 | `533a033565670c44f8652cc72f52532855976db423cb78a101ec208d2e1d38a6` | not referenced |
| Design/TripoDeliveries/2026-11-09_New_Models_from_user/originals/04_Blue_Gear_Candidate_COMPACT.glb | 9,692,300 | `24ae54d260dd9170605599c65f8d74f54260079ed4ead20cd2bc75d4a111a2ff` | not referenced |
| Design/TripoDeliveries/2026-11-09_New_Models_from_user/originals/05_Purple_Gem_Candidate_COMPACT.glb | 10,122,596 | `35c6866d34f4440c8498bfa347caaa844c82fadc1689ee018544facbd8f571f6` | not referenced |
| Design/TripoDeliveries/2026-11-09_New_Models_from_user/originals/06_Sock_Character_COMPACT.glb | 10,287,896 | `7843249a8217f90332f8d5d093da15ac4c29b8479df861f643a741fdffb94cc2` | not referenced |
| Design/TripoDeliveries/2026-11-09_New_Models_from_user/originals/BubbleWash_821_Small.glb | 11,146,696 | `51398e9751011c3f4df5644268d77b67351afff6c43b7a11a40fcf0c8da6df8c` | not referenced |
| Design/TripoDeliveries/2026-11-09_New_Models_from_user/originals/HJ_748_COMPACT.glb | 10,840,088 | `f16f2aa79509255dd613649acc581e1b07e88dce9dc5c347934fa5ab36ad8222` | not referenced |
| Design/TripoDeliveries/2026-11-09_New_Models_from_user/originals/OIT_748_COMPACT.glb | 10,252,260 | `9bbe8a2f526aeebb0303573d8e882071e7e1b987ad00fdf3ea3ac92d48b72f60` | not referenced |
| Design/TripoDeliveries/A2Tunnel/Bubble_Wash_A2_Tunnel_Claude_1K.glb | 1,728,800 | `23ff9a2a362efd1c0cbb96516d9bc316eb7590f287fe52fd20625447401b592b` | not referenced |
| Design/TripoDeliveries/A2Tunnel/Bubble_Wash_A2_Tunnel_Claude_2K.glb | 3,776,776 | `fa77c28465c829e276f0abb573fee7beba1b6f1eb7bd41b5df5911ef567cb52d` | not referenced |
| Design/TripoDeliveries/Round10_PinkMascot_Rear/tripo_f2eeb0ee_pink_mascot_rear_REJECTED.glb | 8,750,652 | `764be71d10b3118bb628de16b7cf04f1eccd86406f717219127d110662680673` | not referenced |
| WebDemo/models/brush_p2.glb | 691,704 | `3568fda85060948138d27f6abb03ef57b5fe9b34ed91a310ae0fed5d81cea99b` | referenced in game code |
| WebDemo/models/castle.glb | 5,758,788 | `778288a85fa666dffaa388cc9ecabeb8fa8c58d15011cbd3947225ba4ec75f5f` | referenced in game code |
| WebDemo/models/coin_p2.glb | 375,572 | `cc9c493be067cb98589cfa3707ffba82405c12bdcfee99e51b526bf35a0f8bb9` | referenced in game code |
| WebDemo/models/coin_p2_lo.glb | 74,404 | `f3fd22f5c64e4081a6dee756814de01b3464eb1c6010bbc85f53c6a0c7dc4345` | referenced in game code |
| WebDemo/models/coin_v2_tripo.glb | 272,560 | `763ff8e79a9efc77ffb9efc13f761047518a5079fc771cc90f3d044b9c152f13` | referenced in game code |
| WebDemo/models/coin_v2_tripo_lo.glb | 249,684 | `e80c4ed45453f9cb3a34ac301e842fb1697be8377d9c009ccb6fecee2d325fcd` | referenced in game code |
| WebDemo/models/crown.glb | 1,162,176 | `a2ec6d77c65936af5a94cc94986cf235c01cf786f96dc8c0ff3ba2f0e99ab3ad` | referenced in game code |
| WebDemo/models/drum.glb | 6,234,288 | `9aac8d94df02e8f16207e064f048967e9e6b876bbe5c395c0024c83f54a4ee65` | referenced in game code |
| WebDemo/models/gear.glb | 988,992 | `147d839347a79518861e50bf7381c693e19c6679c81f3bb459eb2263a71d757b` | referenced in game code |
| WebDemo/models/gem.glb | 344,508 | `85edb314c633ec0ae1089f7db34fb9b32a088e358e73eeb5409132e193c7bc45` | referenced in game code |
| WebDemo/models/l1_enemy_tripo.glb | 428,808 | `62ea51ce0f210f1534ddc1b500063d97b29116e3696cb5de2c906e62d96a804b` | referenced in game code |
| WebDemo/models/l1_enemy_v2_tripo.glb | 212,840 | `ee03e5e2caa99a6e3d6045bd6f93afba35b2a346e05addaa668bb171f071a51c` | referenced in game code |
| WebDemo/models/liner.glb | 5,990,176 | `ef74baaa26e34b542b268193ee48457a4de831d2076031740efe7d5778dfc3a1` | referenced in game code |
| WebDemo/models/machinery.glb | 8,449,828 | `5d20b4113617a89fbc5cf1d8222b69b0bbe25f6fb6b964ca59b50c21758d73da` | referenced in game code |
| WebDemo/models/machinery_lod.glb | 1,701,644 | `7112c553e5978219763436a453d63e66bdef0792ae9d771bf90d294e6b539e11` | not referenced |
| WebDemo/models/mascot.glb | 1,785,212 | `338177b1fff3264f77657054db2f01ae22ab9ea5a90adb3591057b98b55fcad1` | referenced in game code |
| WebDemo/models/mascot_furshell.glb | 10,520,520 | `8128063192d35c4253d1e80700c62f43f4c67ae123a82788f28a6cbcf655670e` | not referenced |
| WebDemo/models/opening/basket_tripo.glb | 551,984 | `9dc555cde3d6c37aab4d2e7c4361c8f3f67fe1678f6a366812bfa80945e9ab1f` | referenced in game code |
| WebDemo/models/opening/basket_v2_tripo.glb | 642,792 | `6676e964a1f04b5c537fc7d878c267cd07a75634bc0430a30e907754f0892d03` | referenced in game code |
| WebDemo/models/opening/door_tripo_oit748.glb | 1,087,564 | `e193bc7e27a5dff2e234cb466b74ec9c4a1bf208ec32a960d5c1edfd33f6420e` | referenced in game code |
| WebDemo/models/opening/door_tripo_oit748_gold.glb | 766,620 | `5b266b82703c4bca1833a69745be62a9a26b6032f0acfd5ad52a895a2a44ca16` | referenced in game code |
| WebDemo/models/opening/gear_v2_tripo.glb | 437,956 | `b841efd9c60dc9d646957eed5e17291bae8a5461f21193977b971dc92469c640` | referenced in game code |
| WebDemo/models/opening/girl_rigged.glb | 1,148,704 | `abf6222c30da26aeb469695b10b9694baaf0b32bb45bfda16bd21835f9f191d2` | referenced in game code |
| WebDemo/models/opening/girl_v2_rigged.glb | 949,420 | `01b841a47625a3582a2b629b621428bc9d17af5bb7626054d425848c8db9dedf` | referenced in game code |
| WebDemo/models/opening/housing_tripo_821.glb | 870,144 | `e7d2b5e530687f6682b05d4a6a1e84ec836f64f6f934207317dd4a224bcca908` | referenced in game code |
| WebDemo/models/opening/towels_tripo.glb | 688,208 | `cf75f12585ae8586ad0ca69997ac58618f772d690ba60c0010c2904a81242101` | referenced in game code |
| WebDemo/models/opening/washer_tripo_hj748.glb | 1,433,532 | `f7b8b7eeed596d203192d31f142000c98256b5a18204ac106f8e7d3dfca7e81a` | referenced in game code |
| WebDemo/models/pipe.glb | 1,278,996 | `1786c5acf8ef0f1fb0151a543a405a47167b7790bb0d4692be1d6e1b59cac7f7` | referenced in game code |
| WebDemo/models/roller.glb | 416,384 | `28c3421997e01e1e30e556142f097a5783e7827a5bbf9c65e302fad9c110e5e9` | referenced in game code |
| WebDemo/models/roller_candidate_1.glb | 4,877,728 | `c7f15a3d22027e0c3d5a878fccf6fc968df8d0c4889bb5e728595f9644314c72` | referenced in game code |
| WebDemo/models/roller_candidate_2.glb | 3,321,516 | `b21fe8cd70d28f60840dd44e78e1d1fb081b2f46032513bcdbe06e5db88fefa0` | referenced in game code |
| WebDemo/models/s3_brush.glb | 3,025,936 | `643f68286045942fb83f8c175418ba8f088901f3467af14f0b647a247f7ac523` | referenced in game code |
| WebDemo/models/s3_castle.glb | 2,583,040 | `2b7db642523f3c4149739b7220a075d556c6abf2604cf27e0e0bee50d9e697c4` | referenced in game code |
| WebDemo/models/s3_entrance.glb | 2,484,096 | `53acb9e071a5e1e786283cb1e0dc96bca5ca279fb6d2c14d61186991e2a891ef` | referenced in game code |
| WebDemo/models/s3_machinery.glb | 1,721,220 | `65bb1465e2136f6c894cf01e4c5ea32e303716852b73a8f5025f291c63f17f65` | referenced in game code |
| WebDemo/models/s56tm/mach_lod0.glb | 888,264 | `b75b39383f3c83527d21b9a57b9cde2bb1d66d0ae6802c19eed48b3e03651eb9` | not referenced |
| WebDemo/models/s56tm/mach_lod1.glb | 663,800 | `3196adcfad1cc146efe63c8ad0c35a461a8b0febed8aefc146cd88482284f394` | not referenced |
| WebDemo/models/s56tm/mach_lod2.glb | 609,592 | `c4d7de7810e13012f73bd9d32d9de775fc0ad8ffb4fd80fb39c46f820afa75ab` | not referenced |
| WebDemo/models/s56tm/machinery_tripo_user_original.glb | 11,005,412 | `2ce9047dbc9bca9b3b474bb6a9ea8c221dfcc79c50cc261c8cd8cf8ab711259d` | not referenced |
| WebDemo/models/s56tm/t911_lod0.glb | 666,032 | `ea687e8c83bd3715266ebd6a4294258cc48b0722bab19b512d8a2acdaf951c2b` | not referenced |
| WebDemo/models/s56tm/t911_lod1.glb | 438,688 | `62444baeaaacf2f6a0b0c5775a5ac32b73f7aa110b84856b3d640df0c6bd1fd9` | not referenced |
| WebDemo/models/s56tm/t911_lod2.glb | 383,984 | `6c0e19a9341eddb951f26fcc57f62b2c48435c1678a4472bb23a1f71f622f639` | not referenced |
| WebDemo/models/s56tm/tripo911_user_original.glb | 10,451,688 | `7d38cb23e9825075c87a814e39001e64ff9437ffc06da58799602b4abb4c8395` | not referenced |
| WebDemo/models/scene07/washer_user_1k.glb | 461,424 | `10c092598ef123d2d6f502f269b59c53ec0abb62c878ed57baa91a5d11a1a5f9` | not referenced |
| WebDemo/models/scene07/washer_user_1k_lod.glb | 283,664 | `b0f345e10f0d0cb9a51d576b9da3a497295e9079c37504bf474608cb34d41fa1` | not referenced |
| WebDemo/models/sock.glb | 630,784 | `4d68a2dd666c2d4f98827fa763e4781860f9c23069959e2e52631c5599895db9` | referenced in game code |
| WebDemo/models/sock_v2_tripo.glb | 379,748 | `e58a3f5f707c68cbafa82b644c7e5bae63cccc7952927cf4237c045bef40486b` | referenced in game code |
| WebDemo/models/tower.glb | 1,514,364 | `ccde27b46d05456fca1db537bbd8fd6ecb836f8b02767bcee331d562c0e5c310` | referenced in game code |
