package com.call.center.employees;

public class Respondent implements CallCenterEmployeeInterface {
  private String name;
  private Manager manager;
  public Respondent(String name, Manager manager) {
    this.name = name;
    this.manager = manager;
  }

  @Override
  public void getCall() {

  }

  @Override
  public String getName() {
    return name;
  }
}
