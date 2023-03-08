package com.call.center;

import com.call.center.employees.CallCenterEmployeeInterface;
import com.call.center.employees.Employee;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class RespondentTest {
  @Test
  void receiveCallRespondentIsBusyAndDispatchCallToManager() {
    CallCenterEmployeeInterface manager = new ManagerMock("Bob");
    CallCenterEmployeeInterface respondent = new Employee("Tim", null, manager);

    respondent.pickCall(); // now the respondent is busy

    respondent.pickCall();
    Assertions.assertEquals(1, ((ManagerMock)manager).pickCallCalls);
  }

  @Test
  void receiveCallDirectorIsBusyCallRejected() {
    CallCenterEmployeeInterface director = new Employee("Tim", null);

    director.pickCall(); // now the director is busy
    director.pickCall(); // the director cannot handle the call

    Assertions.assertEquals(1, director.getManagedCalls());
  }

  @Test
  void pickCallIncrementManagedCallValue() {
    CallCenterEmployeeInterface respondent = new Employee("Tim", null);
    Assertions.assertEquals(0, respondent.getManagedCalls());

    respondent.pickCall();
    Assertions.assertEquals(1, respondent.getManagedCalls());
  }

  private class ManagerMock extends Employee {
    public int pickCallCalls = 0;

    public ManagerMock(String name) {
      super(name, null);
    }

    public void pickCall() { pickCallCalls++; }
  }
}
