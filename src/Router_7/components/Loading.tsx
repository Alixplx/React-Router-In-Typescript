type LoadingProps = {

    message?: string;
};
  
function Loading({ message = "Loading..." }: LoadingProps) {
    
    return <p className="loading">{message}</p>;
}
  
export default Loading;