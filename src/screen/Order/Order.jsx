import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import OrderBox from "../../components/OrderBox/OrderBox";
import Result from "../Result/Result";

import { fetchData } from "../../api/fetchData";
import { useQuery } from "@tanstack/react-query";

import styles from "./Order.module.css";

export default function Order() {
  const { isPending, data } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchData,
  });

  const renderContent = () => {
    if (isPending) {
      return (
        <Result
          url={null}
          firstRow={"목록을"}
          secondRow={"불러오고 있습니다."}
        />
      );
    }
    return <List data={data} />;
  };

  return (
    <section className={styles.container}>
      <Header />
      {renderContent()}
      <OrderBox isPending={isPending} />
    </section>
  );
}
