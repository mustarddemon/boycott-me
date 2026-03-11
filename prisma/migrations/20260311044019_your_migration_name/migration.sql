-- AddForeignKey
ALTER TABLE "boycotts" ADD CONSTRAINT "boycotts_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "boycotts" ADD CONSTRAINT "boycotts_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "company_location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
