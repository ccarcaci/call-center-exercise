package com.call.center;

import com.call.center.employees.CallCenterEmployeeInterface;
import com.call.center.employees.Employee;
import com.call.center.employees.calltick.CallTick;
import com.call.center.employees.calltick.Randomer;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class RespondentTickTest {
  @Test
  void tickRespondentIsNotBusy() {
    CallTickMock callTickMock = new CallTickMock(null);
    CallCenterEmployeeInterface respondent = new Employee("Ramiro", callTickMock, null);

    respondent.tick();

    Assertions.assertEquals(0, callTickMock.incrementBusyTimeCalls);
    Assertions.assertEquals(0, callTickMock.maybeSetFreeCalls);
  }

  @Test
  void tickRespondentIsBusy() {
    CallTickMock callTickMock = new CallTickMock(null);
    CallCenterEmployeeInterface respondent = new Employee("Ramiro", callTickMock, null);

    respondent.pickCall();
    // Respondent now is busy
    respondent.tick();

    Assertions.assertEquals(1, callTickMock.incrementBusyTimeCalls);
    Assertions.assertEquals(1, callTickMock.maybeSetFreeCalls);
  }
}

class CallTickMock extends CallTick {
  public int incrementBusyTimeCalls = 0;
  public int maybeSetFreeCalls = 0;

  public CallTickMock(Randomer randomer) {
    super(randomer);
  }

  @Override
  public void incrementBusyTime() {
    incrementBusyTimeCalls++;
  }
  @Override
  public boolean maybeSetFree() {
    maybeSetFreeCalls++;
    return true;
  }
}
