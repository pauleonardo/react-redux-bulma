const initialState = {
  viewList: {
    list: [],
    loading:false,
    error:null
  },
  viewDetail:{
    loading:false,
    error:null,
    id:'',
    name:'',
    email:'',
    users:[]
  }
}
export default initialState;
