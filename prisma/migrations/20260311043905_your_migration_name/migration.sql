-- AddForeignKey
ALTER TABLE "company_location" ADD CONSTRAINT "company_location_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
