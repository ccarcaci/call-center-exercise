Call center exercise
===

This exercise is meant to provide a comparison between OOP and procedural programming and is part of the [OOP article]().

In this repo, we solve the "Call Center" exercise from [Cracking the Coding Interview](https://www.crackingthecodinginterview.com/) book reported in Chapter 7 "Object-Oriented Design".

We provide the solution using Java (OOP) and Node.js (procedural).

# Exercise description

> Imagine you have a call center with three levels of employees: respondent, manager, and director. An incoming telephone call must be first allocated to a respondent who is free. If the respondent can't handle the call, he or she must escalate the call to a manager. If the manager is not free or not able to handle it, then the call should be escalated to a director. Design the classes and data structures for this problem. Implement a method `dispatchCall()` which assigns a call to the first available employee.

Actually, this exercise definition is not consistent. If the call is allocated to a free respondent there are no reasons that the respondent can't handle the call. With this logic, the calls never escalate. I have reformulated the exercise as:

> Imagine you have a call center with three levels of employees: respondent, manager, and director. An incoming telephone call **must be allocated to the respondent who managed less calls**. If the respondent can't handle the call, he or she must escalate the call to a manager. If the manager is not free or not able to handle it, then the call should be escalated to a director. Design the classes and data structures for this problem. Implement a method `dispatchCall()` which assigns a call to the first available employee.

## Preliminary assumptions

### Tick

We take as a tick event an incoming call. An incoming call happens every two seconds.

### Initial status

The initial status will consist of:
- 1 director, no calls managed
- 3 managers, no calls managed
- 15 respondents, 5 each manager, 11 of them busy on a call

### Evolving

As per each tick, we perform the `dispatchCall()` logic.

Moreover, we apply some rules to free the busy respondents.
- If a respondent is busy for more than 20s will be set free
- If a respondent is busy for 10s to 20s will have a 90% chance of being set free
- If a respondent is busy for 6s to 10s will have a 50% chance of being set free
- If a respondent is busy for less than 6s will have a 10% chance of being set free

I decided to avoid using parametric tests in both solutions to evaluate the conciseness and ease of defining parametric mocks in OOP and procedural languages.
