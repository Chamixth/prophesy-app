import Prophesy from "../models/prophesy";
const GetProphesy = async () => {
    try{
        const response = await fetch("http://localhost:8890/Prophesy/api/FindProphesy?prophesyId=002")
        console.log(response);
        if (!response.ok){
            throw new console.error(response);
        }
        const prophesy = await response.json();
        console.log(prophesy);
        return {
            prophesyId: prophesy.prophesyId,
            prophesy:prophesy.prophesy
          };
        
        } catch (error) {
          console.error('Error fetching prophecy:', error);
          throw error;
    }
}
export default {GetProphesy };