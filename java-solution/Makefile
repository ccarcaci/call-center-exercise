BIN_MAIN_DIR=bin/main
run:
	javac -d ${BIN_MAIN_DIR} -cp src src/com/call/center/App.java
	jar --create --file bin/call-center.jar --main-class com.call.center.App -C bin/main .
	java -jar bin/call-center.jar
