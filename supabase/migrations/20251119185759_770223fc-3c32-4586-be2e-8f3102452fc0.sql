-- Modify the check constraint to allow 'both' as a valid value
ALTER TABLE menu_items DROP CONSTRAINT IF EXISTS menu_items_veg_nonveg_check;

ALTER TABLE menu_items ADD CONSTRAINT menu_items_veg_nonveg_check 
CHECK (veg_nonveg IN ('veg', 'non-veg', 'egg', 'both'));