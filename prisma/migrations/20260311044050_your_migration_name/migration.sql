-- AddForeignKey
ALTER TABLE "buycotts" ADD CONSTRAINT "buycotts_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "buycotts" ADD CONSTRAINT "buycotts_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "company_location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
