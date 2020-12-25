// fetch('boss/rockie.json').then((response) =>{
//     console.log('resolve', response);
//     return response.json();
// }).then(data=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log('error', err);
// });

const mission = async  () =>{
    const response = await fetch('boss/rockie.json');
    if (response.status !== 200){
        throw new Error('Can not fetch data');
    }
    const data = await response.json();

    return data;
};

mission()
    .then(data => console.log(data))
    .catch(err => console.log(err.message));