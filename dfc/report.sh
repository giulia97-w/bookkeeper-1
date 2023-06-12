#!/bin/sh

BADUACLI="../dfc/ba-dua-cli-0.2.0-all.jar"
BADUASER="./coverage.ser"
CLASSES="./target/classes"
BADUAXML="./target/badua.xml"

java -jar ${BADUACLI} report    \
        -input ${BADUASER}      \
        -classes ${CLASSES}     \
        -show-classes           \
        -show-methods           \
        -xml ${BADUAXML}
