document.getElementById('loan-form').addEventListener('submit',function(e){

    e.preventDefault();
    document.getElementById('results').style.display='none';
    document.getElementById('loading').style.display='block';

    setTimeout(calculate,2000);

});


function calculate()
{
    //UI 

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayement = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const  totalInterest= document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest =((( parseFloat(interest.value))/100)/12);
    const calculatedPayments = parseFloat(years.value)*12;

    //monthly
    const x = Math.pow(1+calculatedInterest,calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly))
    {
        monthlyPayement.value=monthly.toFixed(2);
        totalPayment.value=(monthly*calculatedPayments).toFixed(2);
        totalInterest.value=((monthly*calculatedPayments)-principal).toFixed(2);

        // show results
        document.getElementById('loading').style.display='none';
        document.getElementById('results').style.display='block';
        

    }
    else
    {
        if(amount.value===''||interest.value===''||years.value=='')
        {
            showError('Pleae fill all the Entries');   
             
        }
        else
        {
            showError('Please check your Numbers');
            
        }
        document.getElementById('loading').style.display='none';
        
    }
    
} 

function showError(error){
    const errorDiv = document.createElement('div');
    const button=document.querySelector('.btn');
    const cool=document.querySelector('.cool');
    errorDiv.className='alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));
    cool.insertBefore(errorDiv,button);
    setTimeout(clearerror,2000);
}
function clearerror()
{
    document.querySelector('.alert').remove();
}

 