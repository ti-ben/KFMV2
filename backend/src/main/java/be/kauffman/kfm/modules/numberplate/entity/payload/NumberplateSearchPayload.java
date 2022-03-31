package be.kauffman.kfm.modules.numberplate.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NumberplateSearchPayload {
    String search;
}
