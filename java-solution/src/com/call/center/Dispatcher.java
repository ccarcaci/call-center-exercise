package com.call.center;

import java.util.Comparator;
import java.util.List;

import com.call.center.employees.CallCenterEmployeeInterface;

public class Dispatcher {
  private List<CallCenterEmployeeInterface> respondents;
  public Dispatcher(List<CallCenterEmployeeInterface> respondents) {
    this.respondents = respondents;
  }

  public void dispatchCall() {
    if(respondents.size() == 0) {
      return;
    }

    respondents.sort(Comparator.comparingInt(CallCenterEmployeeInterface::getManagedCalls));
    respondents.get(0).pickCall();
  }

  public void tick() {
    respondents.forEach(CallCenterEmployeeInterface::tick);
  }
}
