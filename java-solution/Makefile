BIN_MAIN_DIR=bin/main
run:
	javac -d ${BIN_MAIN_DIR} -cp src src/com/call/center/App.java
	(cd bin/main; jar cfe ../call-center.jar com.call.center.App .)
#	jar cfm ../call-center.jar ../../META-INF/MANIFEST.mf com/call/center/App.class
#	jar --verbose \
#		--manifest=META-INF/MANIFEST.mf \
#		--create \
#		--file bin/call-center.jar \
#		${BIN_MAIN_DIR}/com/call/center/App.class
	java -jar bin/call-center.jar

readJar:
	jar -tf bin/call-center.jar
