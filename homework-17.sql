CREATE TABLE "Dvorane" (
	"Id_dvorane" serial,
	"Ime dvorane" varchar(50) NOT NULL,
	"Velicina_dvorane" integer(50) NOT NULL,
	CONSTRAINT Dvorane_pk PRIMARY KEY ("Id_dvorane")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Korisnici" (
	"Id-korisnika" serial,
	"Vrsta_korisnika" integer NOT NULL,
	"username" varchar(50) NOT NULL UNIQUE,
	"password" varchar(50) NOT NULL,
	CONSTRAINT Korisnici_pk PRIMARY KEY ("Id-korisnika")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Vrsta korisnika" (
	"Id" integer,
	"Vrsta_korisnika" varchar(50) NOT NULL,
	CONSTRAINT Vrsta korisnika_pk PRIMARY KEY ("Id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Zahtjevi za rezervacije" (
	"Id_zahtjeva" serial,
	"Id_dvorane" integer NOT NULL,
	"Rezervirao" varchar(50) NOT NULL,
	"Rezervirano od" TIMESTAMP NOT NULL,
	"Rezervirano do" TIMESTAMP NOT NULL,
	CONSTRAINT Zahtjevi za rezervacije_pk PRIMARY KEY ("Id_zahtjeva")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Status zahtjeva" (
	"Status" varchar(50) DEFAULT 'pending',
	"Id_zahtjeva" integer NOT NULL,
	CONSTRAINT Status zahtjeva_pk PRIMARY KEY ("Status")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Potvrdene rezervacije" (
	"Id_rezervacije" serial,
	"Id_zahtjeva" integer NOT NULL,
	CONSTRAINT Potvrdene rezervacije_pk PRIMARY KEY ("Id_rezervacije")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "Korisnici" ADD CONSTRAINT "Korisnici_fk0" FOREIGN KEY ("Vrsta_korisnika") REFERENCES "Vrsta korisnika"("Id");


ALTER TABLE "Zahtjevi za rezervacije" ADD CONSTRAINT "Zahtjevi za rezervacije_fk0" FOREIGN KEY ("Id_dvorane") REFERENCES "Dvorane"("Id_dvorane");

ALTER TABLE "Status zahtjeva" ADD CONSTRAINT "Status zahtjeva_fk0" FOREIGN KEY ("Id_zahtjeva") REFERENCES "Zahtjevi za rezervacije"("Id_zahtjeva");

ALTER TABLE "Potvrdene rezervacije" ADD CONSTRAINT "Potvrdene rezervacije_fk0" FOREIGN KEY ("Id_zahtjeva") REFERENCES "Status zahtjeva"("Id_zahtjeva");

