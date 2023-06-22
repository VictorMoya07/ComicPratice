    export  const chunckArray = async(array, num)=>{
        const itemsPerPage = num; // Número de elementos por página
 
     // Dividir los datos en grupos de tres elementos
     const groupedItems = array.reduce((acc: any[][], curr: any, index: number) => {
       const pageIndex = Math.floor(index / itemsPerPage);
       if (!acc[pageIndex]) {
         acc[pageIndex] = [];
       }
       acc[pageIndex].push(curr);
       return acc;
     }, []); 

     return groupedItems;
    }
    
    