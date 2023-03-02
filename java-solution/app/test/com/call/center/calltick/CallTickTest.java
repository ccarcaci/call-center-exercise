package com.call.center.calltick;

import com.call.center.employees.calltick.CallTick;
import com.call.center.employees.calltick.Randomer;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class CallTickTest {
  @Test
  void busyTimeIs5And10PercentProbabilitySetFreeIsTrue() {
    Randomer randomer = new RandomerMock();
    ((RandomerMock)randomer).nextProbability = 10;
    CallTick callTick = new CallTick(randomer);

    for(int i = 0; i < 5; i++) {
      callTick.incrementBusyTime();
    }

    boolean isFree = callTick.maybeSetFree();
    Assertions.assertEquals(true, isFree);
  }
  @Test
  void busyTimeIs5And11PercentProbabilitySetFreeIsFalse() {
    Randomer randomer = new RandomerMock();
    ((RandomerMock)randomer).nextProbability = 11;
    CallTick callTick = new CallTick(randomer);

    for(int i = 0; i < 5; i++) {
      callTick.incrementBusyTime();
    }

    boolean isFree = callTick.maybeSetFree();
    Assertions.assertEquals(false, isFree);
  }

  @Test
  void busyTimeIs6And50PercentProbabilitySetFreeIsTrue() {
    Randomer randomer = new RandomerMock();
    ((RandomerMock)randomer).nextProbability = 50;
    CallTick callTick = new CallTick(randomer);

    for(int i = 0; i < 6; i++) {
      callTick.incrementBusyTime();
    }

    boolean isFree = callTick.maybeSetFree();
    Assertions.assertEquals(true, isFree);
  }

  @Test
  void busyTimeIs6And51PercentProbabilitySetFreeIsFalse() {
    Randomer randomer = new RandomerMock();
    ((RandomerMock)randomer).nextProbability = 51;
    CallTick callTick = new CallTick(randomer);

    for(int i = 0; i < 6; i++) {
      callTick.incrementBusyTime();
    }

    boolean isFree = callTick.maybeSetFree();
    Assertions.assertEquals(false, isFree);
  }

  @Test
  void busyTimeIs10And90PercentProbabilitySetFreeIsTrue() {
    Randomer randomer = new RandomerMock();
    ((RandomerMock)randomer).nextProbability = 90;
    CallTick callTick = new CallTick(randomer);

    for(int i = 0; i < 10; i++) {
      callTick.incrementBusyTime();
    }

    boolean isFree = callTick.maybeSetFree();
    Assertions.assertEquals(true, isFree);
  }

  @Test
  void busyTimeIs10And91PercentProbabilitySetFreeIsFalse() {
    Randomer randomer = new RandomerMock();
    ((RandomerMock)randomer).nextProbability = 91;
    CallTick callTick = new CallTick(randomer);

    for(int i = 0; i < 10; i++) {
      callTick.incrementBusyTime();
    }

    boolean isFree = callTick.maybeSetFree();
    Assertions.assertEquals(false, isFree);
  }

  @Test
  void busyTimeIs20SetFreeIsTrueAndNoCallsToProabilityCheck() {
    CallTick callTick = new CallTick(null);

    for(int i = 0; i < 20; i++) {
      callTick.incrementBusyTime();
    }

    boolean isFree = callTick.maybeSetFree();
    Assertions.assertEquals(true, isFree);
  }
}

class RandomerMock extends Randomer {
  public int nextProbability = 0;
  public int randomCalls = 0;

  @Override
  public int random() {
    randomCalls++;
    return nextProbability;
  }
}
