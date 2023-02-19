package com.call.center.employees;

public class CallCenterEmployeesFactory {
  public static CallCenterEmployeeInterface createCallCenterEmployee(String name, String role) {
    if(role === "Respondent") {
      return new Respondent(name, role);
    }
  }
}
