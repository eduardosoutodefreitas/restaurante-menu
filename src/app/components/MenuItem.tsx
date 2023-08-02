import Image from "next/image";
import Link from "next/link";
interface MenuItemProps {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

const MenuItem = ({
  id,
  description,
  imageUrl,
  name,
  price,
}: MenuItemProps) => {
  return (
    <Link href={`/DishDescription/${id}`}>
      <div className="flex items-center gap-5 pb-4 border-b border-veryLightGray mb-3 min-h-[157px]">
        <Image
          width={185}
          height={113}
          src={imageUrl}
          alt="food photo"
          className="rounded-lg flex-1 max-w-[180px] h-[120px]"
          sizes="(max-width: 768) 100vw, 700px"
        />
        <div className="text-xs flex-2">
          <p className="text-base font-semibold">{name}</p>
          <p className="my-2 line-clamp-2 text-lightGray">
            {description}
          </p>
          <span className="font-medium">R${price}</span>
        </div>
      </div>
    </Link>
  );
};

export default MenuItem;
