package com.call.center.employees.calltick;

import java.util.Random;

public class Randomer {
  public int random() {
    Random rand = new Random();
    return rand.nextInt(100) + 1;
  }
}
