package com.call.center.employees;

public class Director implements CallCenterEmployeeInterface {
  private String name;

  public Director(String name) {
    this.name = name;
  }

  @Override
  public void getCall() {

  }

  @Override
  public String getName() {
    return name;
  }
}
