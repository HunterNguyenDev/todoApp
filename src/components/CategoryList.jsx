import { useMemo } from "react";
import { CATEGORY_ITEMS } from "../constants";
import "./CategoryList.css";
import { useAppContext } from "../context/AppProvider";

const CategoryList = () => {
  const { selectedCategoryId, setSelectedCategoryId, todoList } =
    useAppContext();

  const countByCategory = useMemo(() => {
    return todoList.reduce(
      (acc, cur) => {
        // console.log([cur.category]);

        // // Cach 1:
        // if (cur.category === "personal") {
        //   return { ...acc, personal: acc.personal + 1 };
        // }
        // if (cur.category === "company") {
        //   return { ...acc, company: acc.company + 1 };
        // }
        // if (cur.category === "travel") {
        //   return { ...acc, travel: acc.travel + 1 };
        // }
        // if (cur.category === "idea") {
        //   return { ...acc, idea: acc.idea + 1 };
        // }

        // // Cach 2:
        return { ...acc, [cur.category]: acc[cur.category] + 1 };
      },
      {
        personal: 0,
        company: 0,
        travel: 0,
        idea: 0,
      }
    );
  }, [todoList]);

  return (
    <div>
      <p>Categories</p>
      <div>
        {CATEGORY_ITEMS.map((category) => {
          return (
            <div
              key={category.id}
              className={`category-item ${
                category.id === selectedCategoryId ? "selected" : ""
              }`}
              onClick={() => setSelectedCategoryId(category.id)}
            >
              <p className="category-name">{category.label}</p>
              <p>{countByCategory[category.id]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
