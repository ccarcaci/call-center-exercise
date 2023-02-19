package com.call.center;

import com.call.center.employees.CallCenterEmployeeInterface;
import com.call.center.employees.Director;
import com.call.center.employees.Manager;
import com.call.center.employees.Respondent;
import org.junit.jupiter.api.Test;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;

public class DispatcherTest {
  @Test
  void receiveCall() {
    CallCenterBuilderInterface callCenterBuilderMock = new CallCenterBuilderMock();
    List<CallCenterEmployeeInterface> respondents = callCenterBuilderMock.buildRespondents();

    Dispatcher dispatcher = new Dispatcher(respondents);
  }
}

class CallCenterBuilderMock implements CallCenterBuilderInterface {
  @Override
  public List<CallCenterEmployeeInterface> buildRespondents() {
    CallCenterEmployeeInterface director = new DirectorMock("Anna");
    CallCenterEmployeeInterface manager = new ManagerMock("Tim", (Director) director); // Forced casting, be careful with implemented methods
    CallCenterEmployeeInterface respondent = new RespondentMock("Rick", (Manager) manager);
    CallCenterEmployeeInterface respondent2 = new RespondentMock("Rick", (Manager) manager);
    return Arrays.asList(respondent, respondent2);
  }
}

class DirectorMock extends Director {
  public DirectorMock(String name) {
    super(name);
  }
}

class ManagerMock extends Manager {
  public ManagerMock(String name, Director director) {
    super(name, director);
  }
}

class RespondentMock extends Respondent {
  public RespondentMock(String name, Manager manager) {
    super(name, manager);
  }
}
