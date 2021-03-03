import React from 'react'
import './table.css';
const data = require ("./data");

 const Table =()=>{

        const dataImport = data[0];

    function renderHeaderCells (){
        let headerCells = [];

        Object.keys(dataImport).map((x,i)=>{
              let items = Object.values(dataImport)[i];
              

              headerCells.push(
                  <td colSpan={Object.keys(items).length} key={i.name}>{x}</td>
              )
            return headerCells
        });
        return headerCells;
    }

function renderSubHeaders(){
    let subHeaders = [];
    let subs = Object.values(dataImport);
 subs.map((x,i)=>{

    if(subs[i] !== undefined) {
        Object.keys(subs[i]).map( y=> {
           
            subHeaders.push(
                <td>{y}</td>
            )
            return subHeaders;
        })
    }

     return subHeaders;
 });
    return subHeaders
}

function renderResult () {
   let results = [];
   let res = Object.values(dataImport);
  
   res.map((x,i)=>{
  if(res[i] !== undefined) {
        Object.values(res[i]).map( y=> {
           
            results.push(
                <td>{y}</td>
            )
            return results;
        })
    }

     return results;
 });


    return results;
}

   
     return(
         <>
         <p>Fruit Basket</p>
         <table>
             <thead>
                 <tr>{renderHeaderCells()}</tr>
             </thead>
             <tbody>
                 <tr>{renderSubHeaders()}</tr>
                 <tr>{renderResult()}</tr>
             </tbody>
         </table>
         </>
     )
 };

 export default Table;