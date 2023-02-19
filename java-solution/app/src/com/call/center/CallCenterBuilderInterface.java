package com.call.center;

import com.call.center.employees.CallCenterEmployeeInterface;

import java.util.List;

public interface CallCenterBuilderInterface {
  List<CallCenterEmployeeInterface> buildRespondents();
}
