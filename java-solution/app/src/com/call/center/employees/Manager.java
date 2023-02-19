package com.call.center.employees;

public class Manager implements CallCenterEmployeeInterface {
  private String name;
  private Director director;
  public Manager(String name, Director director) {
    this.name = name;
    this.director = director;
  }

  @Override
  public void getCall() {

  }

  @Override
  public String getName() {
    return name;
  }
}
