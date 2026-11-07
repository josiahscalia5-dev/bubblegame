for T in 6 8.5 11 13.5 16 18.5 21 23.5 26 28.5; do timeout 300 ~/.bubblewash-tools/visual/bin/python proto.py $1 $T | sed -n 3p; done
