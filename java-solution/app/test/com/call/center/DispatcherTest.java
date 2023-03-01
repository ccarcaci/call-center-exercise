package com.call.center;

import com.call.center.employees.CallCenterEmployeeInterface;
import com.call.center.employees.Employee;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

public class DispatcherTest {
  @Test
  void dispatchCallToRespondent() {
    List<CallCenterEmployeeInterface> respondents = CallCenterBuilderMock.buildRespondents();

    Dispatcher dispatcher = new Dispatcher(respondents);
    dispatcher.dispatchCall();

    Assertions.assertEquals(1, ((EmployeeMock)respondents.get(0)).pickCallCalls);
  }

  @Test
  void secondRespondentManagedLessCalls() {
    List<CallCenterEmployeeInterface> respondents = CallCenterBuilderMock.buildRespondents();
    ((EmployeeMock)respondents.get(0)).managedCalls = 1;
    ((EmployeeMock)respondents.get(1)).managedCalls = 0;

    Assertions.assertEquals("Rick", respondents.get(0).getName());

    Dispatcher dispatcher = new Dispatcher(respondents);
    dispatcher.dispatchCall();

    Assertions.assertEquals("Maria", respondents.get(0).getName());
    Assertions.assertEquals(1, ((EmployeeMock)respondents.get(0)).pickCallCalls);
    Assertions.assertEquals("Rick", respondents.get(1).getName());
    Assertions.assertEquals(0, ((EmployeeMock)respondents.get(1)).pickCallCalls);
  }
}

class CallCenterBuilderMock {
  public static List<CallCenterEmployeeInterface> buildRespondents() {
    CallCenterEmployeeInterface respondent = new EmployeeMock("Rick");
    CallCenterEmployeeInterface respondent2 = new EmployeeMock("Maria");
    return Arrays.asList(respondent, respondent2);
  }
}

class EmployeeMock extends Employee {
  public int pickCallCalls = 0;
  public int managedCalls = 0;

  public EmployeeMock(String name) {
    super(name, null);
  }

  @Override
  public void pickCall() {
    pickCallCalls++;
  }

  @Override
  public int getManagedCalls() {
    return managedCalls;
  }
}
