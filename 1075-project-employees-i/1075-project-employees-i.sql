# Write your MySQL query statement below

SELECT Project.project_id, 
ROUND(AVG(Employee.experience_years), 2) as average_years 
FROM Project
JOIN Employee
WHERE Project.employee_id = Employee.employee_id 
GROUP BY Project.project_id;


# {"headers":{"Project":["project_id","employee_id"],"Employee":["employee_id","name","experience_years"]},"rows":{"Project":[[1,49],[1,40],[1,52],[1,50],[1,33],[1,16],[1,7],[1,10],[2,38],[2,54],[2,17],[2,36],[2,25],[2,44],[2,9],[2,15],[2,49],[2,45],[2,48],[2,21],[2,19],[2,29],[2,30],[2,10],[2,42],[2,5],[2,50],[2,37],[2,35],[2,2],[2,32],[2,34],[2,28],[2,14],[2,46],[2,20],[2,26],[2,6],[2,51],[2,16],[2,13],[2,57],[2,55],[2,11],[2,4],[2,31],[3,4],[3,22],[3,54],[3,57],[3,29],[3,25],[3,36],[3,46],[3,55],[3,41],[3,31],[3,10],[3,13],[3,42],[3,33],[3,58],[3,47],[3,23],[3,28],[3,1],[3,14],[3,38],[3,9],[3,6],[3,53],[3,34],[3,49],[3,5],[3,21],[3,37],[3,48],[3,3],[3,12],[3,45],[3,19],[3,50],[3,26],[3,18],[4,7],[4,26],[4,16],[4,6],[4,11],[4,15],[4,43],[4,41],[4,31],[4,42],[4,12],[4,47],[4,44],[4,22],[4,27],[4,10],[4,25],[4,36],[4,39],[4,53],[4,46],[4,54],[4,57],[4,28],[4,19],[4,1],[4,58],[4,32],[4,14],[4,9],[4,23],[4,56],[4,4],[4,33],[4,18],[4,13],[4,45],[4,40],[4,30],[4,35],[4,34],[4,49],[4,50],[4,2],[4,48],[4,51],[4,5],[4,29],[4,38],[4,55],[5,28],[5,37],[5,39],[5,45],[5,10],[5,1],[5,16],[5,33],[5,38],[5,47],[5,5],[5,36],[5,53],[5,4],[5,19],[5,48],[5,54],[5,14],[5,50],[5,30],[5,32],[5,58],[5,26],[5,23],[5,42],[5,52],[5,3],[5,13],[5,57],[5,22],[5,7],[5,46],[5,41],[5,9],[5,25],[5,24],[5,12],[5,49],[5,55],[5,17],[5,35],[5,11],[5,27],[5,43],[5,44],[5,21],[6,56],[6,46],[6,38],[6,29],[6,27],[6,36],[6,22],[6,18],[6,20],[6,57],[6,53],[6,24],[6,19],[6,11],[6,9],[6,15],[6,4],[6,40],[6,43],[6,33],[6,23],[6,1],[6,5],[6,45],[6,21],[6,14],[6,50],[7,1],[7,15],[8,13],[8,3],[8,17],[8,1],[8,34],[8,14],[8,18],[8,55],[8,30],[8,35],[8,26],[8,6],[8,23],[8,27],[8,44],[8,21],[8,54],[8,28],[8,40],[8,41],[8,43],[8,45],[8,53],[8,33],[8,16],[8,11],[8,4],[8,9],[8,32],[8,58],[8,24],[8,25],[8,49],[8,56],[8,47],[8,7],[8,22],[8,52],[8,10],[8,46],[8,50],[8,37],[8,20],[8,15],[8,38],[8,8],[8,42],[8,29],[8,31],[8,51],[8,48],[8,19],[8,57],[9,53],[9,8],[9,23],[9,31],[9,10],[9,14],[9,40],[9,35],[9,34],[9,19],[9,57],[9,20],[9,56],[9,43],[9,45],[9,1],[9,7],[9,37],[9,48],[9,5],[9,2],[9,51],[9,24],[9,55],[9,13],[9,29],[9,49],[9,39],[9,12],[9,30],[9,58],[9,18],[9,44],[9,26],[9,21],[9,28],[9,15],[9,27],[10,11],[10,41],[10,36],[10,34],[10,53],[10,9],[10,42],[10,50],[10,44],[11,42],[11,55],[11,29],[11,23],[12,40],[12,58],[12,13],[12,22],[12,41],[12,38],[12,42],[12,35],[12,28],[12,46],[12,29],[12,43],[12,44],[12,49],[12,2],[12,24],[12,20],[12,23],[12,7],[12,50],[12,1],[12,27],[12,9],[12,39],[12,37],[12,5],[12,55],[12,56],[12,18],[12,30],[12,33],[12,11],[12,10],[12,52],[12,16],[12,31],[12,12],[12,48],[12,45],[12,34],[12,17],[12,36],[12,53],[12,21],[12,26],[12,19],[12,32],[12,25],[12,51],[13,11],[13,40],[13,6],[13,50],[13,7],[13,58],[13,36],[13,29],[13,4],[13,45],[13,9],[13,39],[13,21],[13,25],[13,3],[14,26],[14,20],[14,52],[14,36],[14,30],[14,17],[14,6],[14,22],[14,4],[14,24],[14,10],[14,16],[14,1],[14,47],[14,55],[14,57],[14,49],[14,29],[14,14],[14,27],[14,2],[14,56],[15,39],[15,19],[15,18],[15,46],[15,34],[15,47],[15,16],[15,14],[15,35],[15,30],[15,9],[15,57],[15,36],[15,10],[15,52],[15,45],[15,41],[15,17],[15,22],[15,32],[15,5],[15,48],[15,7],[15,1],[15,54],[15,55],[15,58],[15,43],[15,40],[15,21],[15,3],[15,50],[15,44],[15,53],[15,15],[15,33],[15,51],[15,12],[15,24],[15,49],[15,6],[15,37],[15,25],[15,27],[15,38],[15,42],[15,26],[15,4],[15,20],[15,28],[15,56],[15,31],[15,8],[15,2],[16,22],[16,16],[16,44],[16,45],[16,57],[16,28],[16,6],[16,49],[16,21],[16,58],[16,34],[16,43],[16,56],[16,37],[16,29],[16,26],[16,14],[16,50],[16,42],[16,11],[16,9],[16,30],[16,5],[16,48],[16,35],[16,17],[17,26],[17,31],[17,23],[17,15],[17,36],[17,21],[17,20],[17,25],[17,50],[17,7],[17,52],[17,19],[17,28],[17,39],[17,16],[17,11],[17,57],[17,38],[18,51],[18,3],[18,28],[18,8],[18,32],[18,11],[18,6],[18,13],[18,50],[18,44],[18,29],[18,52],[18,45],[18,36],[18,9],[18,42],[18,16],[18,49],[18,20],[18,30],[18,25],[18,27],[18,1],[18,58],[18,57],[18,38],[18,37],[18,56],[18,47],[18,4],[18,31],[18,41],[18,19],[19,2],[19,54],[19,5],[19,31],[19,6],[19,50],[19,21],[19,27],[19,28],[19,53],[19,48],[19,11],[19,36],[19,43],[19,25],[19,8],[19,33],[19,58],[19,12],[19,9],[19,15],[19,37],[19,39],[19,56],[19,40],[19,1],[19,45],[20,1],[20,33],[20,7],[20,15],[20,55],[20,23],[20,25],[20,32],[20,47],[20,30],[20,36],[20,41],[20,56],[20,45],[20,37],[21,52],[21,19],[21,22],[21,29],[21,26],[21,46],[21,28],[21,9],[21,24],[21,3],[21,16],[21,38],[21,15],[21,10],[21,41],[21,14],[21,25],[21,21],[21,18],[21,27],[21,12],[21,23],[21,51],[21,36],[21,44],[21,45],[21,58],[21,40],[21,47],[21,30],[21,8],[21,48],[21,31],[21,33],[22,28],[22,29],[22,36],[22,17],[22,53],[22,13],[22,33],[22,57],[22,40],[22,14],[22,26],[22,51],[22,16],[22,43],[23,11],[24,8],[24,33],[24,4],[24,37],[24,3],[24,7],[24,22],[24,19],[24,48],[24,43],[24,30],[24,49],[24,52],[24,34],[24,45],[24,16],[24,23],[24,32],[24,36],[24,6],[24,9],[24,13],[25,42],[25,12],[25,4],[25,52],[25,9],[25,56],[25,33],[25,22],[25,13],[25,11],[25,48],[25,58],[25,24],[25,10],[25,7],[25,21],[25,34],[25,20],[25,41],[25,30],[25,40],[25,35],[25,27],[25,5],[25,29],[25,16],[25,3],[25,14],[25,26],[25,17],[25,45],[25,23],[25,2],[25,51],[26,5],[26,31],[26,8],[26,35],[26,37],[26,16],[26,13],[26,52],[26,33],[26,47],[26,55],[26,22],[26,3],[26,43],[26,17],[26,10],[26,39],[26,26],[27,37],[27,6],[27,26],[27,3],[27,38],[27,8],[27,22],[27,11],[27,48],[27,29],[27,28],[27,18],[27,4],[27,49],[27,41],[27,5],[27,52],[27,7],[27,35],[28,33],[28,21],[28,37],[28,5],[28,30],[28,2],[28,17],[28,42],[28,26],[28,46],[29,22],[29,35],[29,4],[29,37],[29,13],[29,17],[29,32],[30,58],[30,52],[30,19],[30,44],[30,5],[30,49],[30,51],[30,20],[30,18],[30,8],[30,7],[30,50],[30,34],[30,24],[30,45],[30,55],[30,25],[30,9],[30,13],[30,38],[30,43],[30,39],[30,40],[30,37],[30,16],[30,15],[30,3],[30,36],[30,57],[30,2],[30,32],[30,48],[30,56],[30,26],[30,1],[30,21],[30,31],[30,23],[30,29],[30,27],[30,28],[30,10],[30,30],[30,54],[30,17],[30,47],[30,4],[30,35],[30,33],[30,6],[30,14],[30,22],[30,53],[30,41],[30,46],[30,12],[30,11],[31,26],[31,28],[31,40],[31,24],[31,55],[31,16],[31,10],[31,42],[31,48],[31,56],[31,52],[31,37],[31,9],[31,6],[31,7],[31,15],[31,47],[31,14],[31,3],[31,46],[31,44],[31,21],[31,49],[31,22],[31,45],[31,2],[31,54],[31,12],[31,35],[31,5],[31,4],[31,27],[31,17],[31,8],[31,1],[31,20],[31,38],[31,34],[31,57],[31,53],[31,41],[31,25],[32,37],[32,17],[32,51],[32,1],[32,50],[32,14],[33,22],[33,9],[33,33],[33,2],[33,54],[33,15],[33,57],[33,34],[33,12],[33,13],[33,40],[33,30],[33,56],[33,21],[34,21],[34,14],[34,4],[34,30],[35,7],[35,56],[35,30],[35,49],[35,6],[35,29],[35,18],[35,35],[35,16],[35,38],[35,19],[35,23],[35,57],[35,10],[35,26],[35,20],[35,42],[35,40],[35,51],[35,34],[35,5],[35,58],[35,1],[35,47],[35,55],[35,24],[35,52],[35,25],[35,4],[35,9],[35,48],[35,43],[35,17],[35,45],[35,15],[35,36],[35,11],[35,27],[36,46],[36,27],[36,48],[36,21],[36,7],[36,22],[36,42],[36,44],[36,45],[36,43],[36,49],[36,58],[36,32],[36,52],[36,47],[36,17],[36,39],[36,15],[36,8],[36,50],[36,10],[36,53],[36,6],[36,55],[36,33],[36,20],[36,23],[37,54],[37,42],[37,58],[37,48],[37,23],[37,38],[37,13],[37,10],[37,2],[37,43],[37,18],[37,40],[37,15],[37,8],[37,9],[37,30],[37,34],[37,26],[37,1],[37,56],[37,52],[37,17],[37,57],[37,45],[37,41],[37,27],[38,6],[38,49],[38,9],[38,29],[38,58],[38,56],[38,57],[38,15],[38,37],[38,50],[38,40],[38,55],[38,24],[38,20],[38,18],[38,31],[38,34],[38,30],[38,39],[38,14],[38,53],[38,4],[38,25],[38,27],[38,48],[38,41],[38,43],[38,33],[38,38],[38,45],[38,47],[38,7],[38,11],[38,36],[38,13],[38,10],[38,23],[38,32],[38,16],[38,17],[38,46],[38,19],[38,42],[38,22],[38,21],[39,29],[39,57],[39,1],[39,6],[39,22],[39,42],[39,34],[39,30],[39,45],[39,44],[39,28],[39,25],[39,36],[39,10],[39,9],[39,51],[39,47],[39,58],[39,50],[39,11],[39,55],[39,16],[39,12],[39,14],[39,4],[39,24],[39,17],[39,31],[39,2],[39,39],[39,48],[39,15],[39,8],[39,40],[39,43],[39,37],[40,27],[40,37],[40,16],[40,52],[40,42],[40,51],[40,9],[40,25],[40,2],[40,11],[40,6],[40,15],[40,13],[40,43],[40,30],[40,47],[40,41],[40,7],[40,35],[40,5],[40,4],[40,26],[40,29],[40,12],[40,40],[40,3],[40,22],[40,46],[40,57],[40,53],[40,21],[40,49],[40,24],[40,55],[41,19],[41,48],[41,58],[41,54],[41,13],[41,36],[41,20],[41,8],[41,17],[41,41],[41,2],[41,10],[41,42],[41,6],[41,27],[41,12],[41,45],[41,50],[41,53],[41,21],[41,47],[41,44],[41,31],[41,51],[41,43],[41,24],[42,26],[42,44],[42,9],[42,14],[42,19],[42,32],[42,56],[43,21],[43,15],[43,24],[43,4],[43,32],[43,3],[43,45],[43,27],[43,12],[43,53],[43,28],[43,43],[43,2],[43,36],[43,35],[43,6],[43,14],[43,56],[43,17],[43,58],[43,10],[43,29],[43,50],[43,34],[43,37],[44,1],[44,28],[44,17],[44,54],[44,34],[44,20],[44,19],[45,44],[45,33],[45,1],[45,36],[45,11],[45,39],[45,8],[45,21],[45,32],[45,27],[46,23],[46,51],[46,2],[46,38],[46,57],[46,22],[46,10],[46,53],[46,36],[46,55],[46,20],[46,25],[46,49],[46,47],[46,26],[46,19],[46,54],[46,45],[46,21],[46,11],[46,48],[47,18],[47,33],[47,6],[47,32],[47,57],[47,37],[47,51],[47,10],[47,44],[47,15],[47,38],[47,40],[47,50],[47,17],[47,49],[47,26],[47,14],[47,29],[47,19],[47,31],[47,52],[47,5],[47,43],[47,22],[47,42],[47,54],[47,28],[47,48],[47,47],[47,39],[47,13],[47,30],[47,3],[47,12],[47,35],[47,16],[47,4],[47,1],[47,23],[47,21],[47,41],[47,20],[48,43],[48,29],[48,32],[48,6],[48,17],[48,58],[48,11],[48,3],[48,37],[48,42],[48,22],[48,25],[48,24],[48,8],[48,16],[48,18],[48,56],[48,39],[48,5],[48,54],[48,13],[48,52],[48,55],[48,33],[48,44],[48,15],[48,57],[48,48],[48,1],[48,36],[48,19],[48,53],[48,35],[48,14],[48,49],[48,51],[48,34],[48,41],[48,2],[48,27],[48,7],[48,9],[48,31],[48,38],[48,4],[48,26],[48,28],[48,45],[48,23],[48,21],[48,12],[49,17],[49,16],[49,29],[49,55],[49,31],[49,21],[49,24],[49,50],[49,8],[49,20],[49,43],[49,32],[49,46],[49,15],[49,38],[49,33],[49,35],[49,3],[49,10],[49,47],[49,26],[49,18],[49,22],[49,36],[49,5],[49,2],[49,54],[49,14],[49,23],[49,28],[49,41],[49,34],[49,25],[49,42],[49,44],[49,6],[49,30],[49,13],[49,7],[49,11],[49,12],[49,53],[49,27],[49,1],[49,49],[49,37],[49,39],[49,52],[49,51],[49,40],[49,58],[49,9],[49,19],[49,4],[49,45],[49,48],[49,56],[49,57],[50,41],[50,1],[50,6],[50,21],[50,3],[50,37],[50,11],[50,31],[50,55],[50,48],[50,56],[50,7],[50,34],[50,30],[50,47],[50,46],[50,39],[50,54],[50,57],[50,19],[50,35],[50,15]],"Employee":[[1,"fmspwb",6],[2,"eqnlmz",27],[3,"dgpsgmmmj",12],[4,"swbayvdpuk",24],[5,"nfzjbc",20],[6,"gwyiyhpmta",30],[7,"zz",1],[8,"jb",20],[9,"seokjckki",21],[10,"e",8],[11,"lc",16],[12,"t",12],[13,"sel",27],[14,"kugsx",7],[15,"wwms",26],[16,"iosuswwzfo",9],[17,"jtsblzxsc",11],[18,"yrsjip",28],[19,"imm",25],[20,"bhq",21],[21,"jqguhz",24],[22,"nkbx",8],[23,"jxn",29],[24,"rxpqlyjx",27],[25,"rtuqo",13],[26,"wt",20],[27,"pkj",6],[28,"ewgtttyg",3],[29,"pnswwgxkt",2],[30,"wmeeeg",11],[31,"yfsfzq",1],[32,"sqqzogovvt",15],[33,"is",15],[34,"fij",23],[35,"elsndhlzar",16],[36,"lwcbimvhq",24],[37,"llinqanvdb",18],[38,"emhtxyz",8],[39,"jdcdel",18],[40,"a",28],[41,"j",15],[42,"zbl",27],[43,"rp",9],[44,"ijh",21],[45,"dv",12],[46,"ovrr",13],[47,"tykyt",20],[48,"hzlkhglnf",20],[49,"rnjthr",24],[50,"eusthy",1],[51,"g",13],[52,"ddsyxwiz",30],[53,"cpwlzm",16],[54,"tby",1],[55,"cg",24],[56,"b",21],[57,"xvfp",9],[58,"ezlvg",18]]}}