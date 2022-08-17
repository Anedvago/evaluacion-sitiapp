package com.example.demo.repositories;
import java.util.ArrayList;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


import com.example.demo.models.invoiceModel;

@Repository
public interface reportRepository extends CrudRepository<invoiceModel,Long> {
    @Query(nativeQuery = true, value = "select case when  i.date is null "+
    "then 'No ha sido vendido'when i.date is not null then concat(month(i.date ), ' de ',year(i.date )) end as date, "+
    "p.name, case when sum(p.unit_value*di.amount) is null then 0 "+
    "when sum(p.unit_value*di.amount) is not null then sum(p.unit_value*di.amount) "+
    "end as total from product p left join detail_invoice di on di.product_id = p.id "+
    "left join invoice i on di.consecutive = i.consecutive group by month(i.date), year(i.date), p.id "+
    "order by i.date, p.id")
	ArrayList<?> obtainReportOne();

    @Query(nativeQuery = true, value = "select distinct (vw.date), vw.business_name, vw.total from( "+
    "select c.business_name, case when  i.date is null then '0' "+
    "when i.date is not null then year(i.date ) end as date, "+
    "case when sum(di.unit_value*di.amount) is null then 0 "+
    "when sum(di.unit_value*di.amount) is not null then sum(di.unit_value*di.amount) "+
    "end as total from client c left join invoice i on i.client = c.client "+
    "left join detail_invoice di on di.consecutive = i.consecutive group by c.client,year(i.date) "+
    "order by date,total ) as vw group by date order by date")
	ArrayList<?> obtainReportTwo();
    
}



