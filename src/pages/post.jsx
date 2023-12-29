import { useParams } from "react-router-dom"

export function Post(){
  const params=useParams();
  console.log(params.id);
  return (
    <>
    This is post page
    <p>Id from url is {params.id}</p>
    </>
  )
}