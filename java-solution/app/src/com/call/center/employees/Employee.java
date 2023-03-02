package com.call.center.employees;

import com.call.center.employees.calltick.CallTick;

public class Employee implements CallCenterEmployeeInterface {
  private String name;
  private CallCenterEmployeeInterface supervisor;
  private int managedCalls = 0;

  private boolean busy;

  private CallTick callTick;

  public Employee(String name, CallTick callTick) {
    this.name = name;
    this.callTick = callTick;
    this.supervisor = null;
  }
  public Employee(String name, CallTick callTick, CallCenterEmployeeInterface supervisor) {
    this.name = name;
    this.callTick = callTick;
    this.supervisor = supervisor;
  }

  @Override
  public void pickCall() {
    if(busy) {
      supervisor.pickCall();
      System.out.println(name + " is busy, routed to manager");
      return;
    }

    busy = true;
    managedCalls++;
    System.out.println(name + " pick the call");
  }

  @Override
  public String getName() {
    return name;
  }

  @Override
  public int getManagedCalls() { return managedCalls; }

  @Override
  public void tick() {
    if(!busy) { return; }

    callTick.incrementBusyTime();
    busy = !callTick.maybeSetFree();
  }
}
