package com.call.center.employees.calltick;

public class CallTick {
  private int busyTime = 0;
  private Randomer randomer;
  public CallTick(Randomer randomer) {
    this.randomer = randomer;
  }

  public void incrementBusyTime() {
    busyTime++;
  }

  public boolean maybeSetFree() {
    if(busyTime < 6 && randomer.random() <= 10) {
      return true;
    }
    if(6 <= busyTime && busyTime < 10 && randomer.random() <= 50) {
      return true;
    }
    if(10 <= busyTime && busyTime < 20 && randomer.random() <= 90) {
      return true;
    }
    if(20 <= busyTime) {
      return true;
    }

    return false;
  }
}
