package com.call.center.employees.calltick;

import java.util.Random;

public class Randomer {
  Random rand = new Random();
  
  public int random() {
    return rand.nextInt(100) + 1;
  }
}
