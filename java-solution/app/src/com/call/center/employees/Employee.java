package com.call.center.employees;

public class Employee implements CallCenterEmployeeInterface {
  private String name;
  private CallCenterEmployeeInterface supervisor;

  private boolean busy;

  public Employee(String name) {
    this.name = name;
    this.supervisor = null;
  }
  public Employee(String name, CallCenterEmployeeInterface supervisor) {
    this.name = name;
    this.supervisor = supervisor;
  }

  @Override
  public void pickCall() {
    if(busy) {
      supervisor.pickCall();
      System.out.println(name + " is busy, routed to manager");
      return;
    }

    System.out.println(name + " pick the call");
  }

  @Override
  public String getName() {
    return name;
  }

  @Override
  public int getManagedCalls() { return 0; }
}
