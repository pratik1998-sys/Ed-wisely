import { createSlice } from '@reduxjs/toolkit'

const dashboardReducer = createSlice({
  name: 'dashboard',
  initialState: {
    tableData: [],
    loadingTableData: true,
    errorLoadingTableData: false,
  },
  reducers: {
    setTableData: (state, action) => {
      console.log(action)
    },
  },
})

export const { setTableData } = dashboardReducer.actions
export default dashboardReducer.reducer
