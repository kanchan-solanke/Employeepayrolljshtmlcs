<!doctype htm>
    <html>
    <body>
        <div id="formId" class="form-content">
<form class="form" action="#" onreset="resetForm()" onsubmit="save()">

    <div class="form-head">Employee PayRoll Form</div>
    <div class="row-content">
        <label class="label text" for="name">Name</label>
        <input class="input" type="text" id="name" name="name" placeholder="Your Name: "required>
        <error-output class="text-error" for="text"></error-output>
    </div>
</form>
</div>

<script>

window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if (name.value.length == 0) 
        {
            textError.textContent = "";
            return;
        }
        try 
        {
          (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";

        } catch (e) 
        {
            textError.textContent = e;
        }
       
    });

       
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
     //in range button the output shown should always be equal to value the user is updating
        output.textContent = salary.value;
     salary.addEventListener('input', function () {
        output.textContent = salary.value;

     });
});

</script>
</body>
</html>
