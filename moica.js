



console.log("voy por aqui--------------------------OK");
function moica(d, r, p) {

    
    let directa = d;
    let retorno =r; 
    let pasivo = p;
    let rta= "su conexion es:";
    var noti ="";
    var noti2="";
    

    // Validar directa
    if (directa > 10 || directa  <= -10) {
      
       noti = directa.toString()+" Directa fuera de norma";
       
    }else{

      noti=   +" en rango";
      
    }
    console.log("voy por aqui 1--------------------------OK");
    
  
    // Validar retorno
    if (retorno < 35 || retorno > 51) {
      noti2 = retorno.toString()+ " Retorno fuera de norma";
      
    }else{
      noti2= retorno.toString()+ " en rango";
      
    }
    console.log("voy por aqui 2--------------------------OK");

    

    // Cálculo del valor ajustado
    let valorAjustado = "";
        // Aplicar ajuste según el estado del pasivo
    if (pasivo === 1) {
        valorAjustado += 3.5;
        pasi = " en primer pasivo";
        
        
        } else if (pasivo === 2) {
        valorAjustado += 7;
        pasi = " en segundo pasivo";
        

        } else if(pasivo === 0){
        valorAjustado += 1.5;
        pasi = " solo modem";
        
    }
    console.log("voy por aqui 4--------------------------OK" );
    
    
    
    
    
  
    
  
    // Restar  al retorno
    let retorno1 = retorno - valorAjustado;
    
    console.log("retorno1 "+ retorno1.toString());
    
    //sumar en directa
    let directa2 = directa + valorAjustado;
    
    
    console.log("directa2 "+ directa.toString());
    

    //rta
    rta =  noti+ " y " + noti2 +"," +pasi ;

    

    
    console.log("voy por aqui 5--------------------------OK");
    // Devolver el valor ajustado

    return rta;


  }   
  
    console.log(moica(-11,55,0));