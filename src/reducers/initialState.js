const initialState = {
  viewList: {
    list: [],
    loading:false,
    error:null
  },
  viewDetail:{
    loading:false,
    error:null,
    name:'',
    email:'',
    users:[]
  }
}
export default initialState;
