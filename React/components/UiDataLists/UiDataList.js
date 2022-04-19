
const ListItem = ({ data, ItemUi, ...rest }) => Object.entries(data).map(([id, item]) => <ItemUi key={ id } { ...{ id, ItemUi, ...item, ...rest } } />)

export const DataList = ({ data, ListUi, ItemUi, NoData, Loading }) => {
  // const List = !data ? false : data.loading ? { loading: true } : Object.entries(data).map(([id, item]) => <ItemUi key={ id } { ...{ id, ...item, ...rest } } />)

  console.log({ data })


  return !data
    ? <NoData />
    : data.loading
      ? <Loading />
      : <ListUi>
        <ListItem { ...{ data, ItemUi } } />
      </ListUi>

  /*!List
    ? <NoData />
    : List.loading
      ? <Loading />
      :
      <ListUi>
        { List }
      </ListUi>*/
}
