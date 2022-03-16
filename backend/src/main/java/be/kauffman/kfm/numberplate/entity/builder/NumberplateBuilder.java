package be.kauffman.kfm.numberplate.entity.builder;

import be.kauffman.kfm.numberplate.entity.dto.Numberplate;

import java.util.Date;
import java.util.UUID;

public class NumberplateBuilder{
    UUID numberplate_id;
    String num_plate    = "no-numero";
    Date dop;

    public NumberplateBuilder setNumberplate_id(UUID numberplate_id){
        this.numberplate_id = numberplate_id;
        return this;
    }

    public NumberplateBuilder setNum_plate(String num_plate) {
        this.num_plate = num_plate;
        return this;
    }

    public NumberplateBuilder setDop(Date dop) {
        this.dop = dop;
        return this;
    }

    public Numberplate build(){
        return new Numberplate(numberplate_id, num_plate, dop);
    }
}