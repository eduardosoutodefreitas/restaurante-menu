import { prisma } from "@/lib/prisma";

import DishDescriptionHeader from "./components/DishDescriptionHeader";
import DishDescriptionBanner from "./components/DishDescriptionBanner";
import DishDescriptionDetails from "./components/DishDescriptionDetails";
import DishDescriptionFooter from "./components/DishDescriptionFooter";
interface DishDetailsPageInterface {
  params: {
    dishId: string;
  };
}

const getDishDetails = async (dishId: string) => {
  const dish = await prisma.dish.findUnique({
    where: {
      id: dishId,
    },
  });
  return dish;
};

const DishDetailsPage = async ({ params }: DishDetailsPageInterface) => {
  const dish = await getDishDetails(params.dishId);

  if (!dish) return null;
  return (
    <div className="container mx-auto px-5 sm:px-0">
      <DishDescriptionHeader />
      <DishDescriptionBanner imageUrl={dish.imageUrl} name={dish.name} />
      <DishDescriptionDetails
        name={dish.name}
        description={dish.description}
        peopleServed={dish.peopleServed}
        waitingTime={dish.waitingTime}
      />
      <DishDescriptionFooter price={dish.price.toString()} />
    </div>
  );
};

export default DishDetailsPage;
