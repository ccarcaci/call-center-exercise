package com.call.center.employees;

import java.util.function.ToIntFunction;

public interface CallCenterEmployeeInterface {
  void pickCall();
  String getName();

  int getManagedCalls();
}
