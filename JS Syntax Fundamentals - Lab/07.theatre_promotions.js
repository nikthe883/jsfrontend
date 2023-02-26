function solve (day, age){
    let result;
    if (day == "Weekday"){
        if (0 <= age && age <= 18){
            result = 12;
        }
            
        else if (18 <= age && age <= 64){
            result = 18;
        }

        else if (64 <= age && age <= 122){
            result = 12;
        }

        else{
            result = "Error!"
        }
        
    }
    else if(day == 'Weekend'){
        if (0 <= age && age <= 18){
            result = 15;
        }
            
        else if (18 <= age && age <= 64){
            result = 20;
        }

        else if (64 <= age && age <= 122){
            result = 15;
        }

        else{
            result = "Error!"
        }
    }
    else if (day == 'Holiday'){
        if (0 <= age && age <= 18){
            result = 5;
        }
            
        else if (18 <= age && age <= 64){
            result = 12;
        }

        else if (64 <= age && age <= 122){
            result = 10;
        }

        else{
            result = "Error!"
        }
    }
    else{
        result = 'Error!'
    }
    if (result == 'Error!'){
        console.log('Error!')
    }
    else{
        console.log(`${result}$`)
    }
    
}

