-- CreateTable
CREATE TABLE "companies" (
    "id" TEXT NOT NULL,
    "company_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company_location" (
    "location_id" TEXT NOT NULL,
    "company_id" VARCHAR(255) NOT NULL,
    "addressLine1" VARCHAR(255) NOT NULL,
    "addressLine2" VARCHAR(255) NOT NULL,
    "country" VARCHAR(255) NOT NULL,
    "postalCode" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "stateProvinceRegion" VARCHAR(255) NOT NULL,

    CONSTRAINT "company_location_pkey" PRIMARY KEY ("location_id")
);
