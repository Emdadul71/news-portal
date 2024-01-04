import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <section className="pt-8 lg:pt-[80px]">
      <div className="container">
        <div className="text-center">
          <h1 className="text-[80px] lg:text-[180px] lg:leading-[198px]">
            <span className="text-gradient ">404</span>
          </h1>
          <h2 className="mb-4 lg:mb-16">Page Not Found</h2>
          <div className="mb-[40px]">
            <Image
              src="/images/misc/404-image.png"
              alt="Not Found"
              width={1680}
              height={945}
              className={`mb-2 `}
            />
          </div>
          <Link href="/" className="btn btn-primary rounded">
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
