# angular_fundamentals task 2 module 3
1. [1 point] Create the custom email validator and the directive for this validator, that will be used by a
   template-driven form. Put it inside shared module.  **done**


2. [1.5 point] Create the complete login page according to screenshots with form which should be a
  template-driven with validation for email and password:
   * All fields are required;  **done**
   * Email should be validated by the custom directive you created;  **done**
   * In case input is invalid, there should be displayed a proper error message below the element and this
     message should be displayed only when form has the submitted status or control was already
     touched. **done**
  
3. [1.5 point] Create the complete registration page according to screenshots with form which should be
  a reactive-driven with validation for name, email and password:
  * All fields are required; **done**
  * Email should be validated by the custom directive you created; **done**
  * Name should not be less than 6 symbols; **done**
  * In case input is invalid, there should be displayed a proper error message below the element and this
  message should be displayed only when form has the submitted status or control was already
  touched. **done**

4. [2 point] Implement course edit/add page according to screenshots and the form should be reactive
   one. Keep in mind the form should be a separate component (see description inside
   COMPONENTS.md). What should be done:
   * All fields there are required, except New author; **done**
   * In case input is invalid, there should be displayed a proper error message below the element and this
   message should be displayed only when form has the submitted status or control was touched; **done**
   * To handle authors state - use FormArray. You can use just disabled input tag to place
   formControl's with authors the course has; **NOT done**
   * In the reactive form also should be newAuthor field, that will contain FormGroup with a control,
   which handles authors adding (Author name field); **NOT done**
   * Duration should be not less than 0; **done**
   * New author should contain only latin letters and numbers. Create a custom validator for this, even
   though angular has a built-in pattern validator; **done**

5. [1 point] create search component with template-driven form (see COMPONENTS.md) and put it inside
shared module. Then add to view inside courses.component before the list of all courses. **done**

6. [1 point] create pipes from functions you implemented in the previous task and place them inside
   shared module:
   * Create duration pipe, that will be transforming data from Duration field into the next view: 00:00,
   where the first part is a hours part, and the second one - minutes; **done**
   * Create creation-date pipe to convert date to the format DD.MM.YYYY; **done**
   * Create string-joiner pipe, that will accept two arguments: the first one is array with strings and
   the second one is a separator, that will be put between strings. **NOT done**
7. [1 point] (Extra task) Create an attribute directive to toggle password type: text <-> password **NOT done**
8. [1 point] (Extra task) Create a structural directive to show control errors, if they exist. **NOT done**

## Total: 7 points
